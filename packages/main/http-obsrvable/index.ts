interface Observer {
  next: (value: any) => void,
  complete: () => void,
  error: (error: Error) => void
}

interface Repo {
  name: string;
  url: string;
}

class Observable {
  #subscriptionFunc: (observer: Observer) => void;
  constructor(subscriptionFunc: (observer: Observer) => void) {
    this.#subscriptionFunc = subscriptionFunc;
  }

  subscribe(observer: Observer) {
    this.#subscriptionFunc(observer);
  }
}

class Http {

  get(url: string): Observable {
    const obs = (observer: Observer) => {
      fetch(url)
        .then((res) => res.json())
        .then(res => observer.next(res))
        .catch((error: any) => observer.error(error))
        .finally(() => observer.complete())
    }
    return new Observable(obs);
  }

}

const http = new Http();
http.get('https://api.github.com/users/fleish8011/repos')
  .subscribe({
    next: (value: any[]) => {
      if (Array.isArray(value)) {
        const repos = value.map((val: any) => ({name: val.name, url: val.url}));
        console.log(repos);
      } else {
        console.log('not a array');
      }
    },
    error: (error) => console.log(error),
    complete: () => console.log('complete')
  })



