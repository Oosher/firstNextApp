

export default function dateFormatter(date:string):string {

  return new Intl.DateTimeFormat('en-eu',{dateStyle:'long'}).format(new Date(date))

}
