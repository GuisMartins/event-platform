import {gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`
interface Lessons  {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lessons[]}>(GET_LESSONS_QUERY)

  console.log(data);

  return (
    <div>
      <ul>
        {data?.lessons.map(lessons => {
          return <li key={lessons.id}>{lessons.title}</li>
        })}
        <li></li>
      </ul>
    </div>
  )
}
 
