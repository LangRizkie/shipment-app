import useSWR from 'swr'

export class Endpoint {
  static fetcher = (url: string) => fetch(url).then((res) => res.json())
  static fetch = (url: string) => useSWR(url, this.fetcher)
}