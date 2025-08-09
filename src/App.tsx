import useAPOD from "./hooks/useAPOD"

function App() {
  const { apod } = useAPOD();

  return (
    <section>
      {Object.keys(apod).length > 0
        ?
        <>
          <div>
            <h2>{apod.title}</h2>
            <p>{apod.explanation}</p>
          </div>
          <figure>
            <img src={apod.hdurl} alt={apod.title} />
          </figure>
        </>
        :
        <p>Error</p> 
      }

    </section>
  )
}

export default App
