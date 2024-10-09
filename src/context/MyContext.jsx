import { createContext, useState, useEffect } from "react";

export const MyContext = createContext()

const MyContextProvider = (props) => {

    const [data, setData] = useState(null)
    const [search, setSearch] = useState("Etawah")
    const [error, setError] = useState("")


    const getFetchData = async () => {

        // const url = "https://api.openweathermap.org/data/2.5/forecast?q=Etawah,In&appid=d8bf74400b644252da4465f85ceb6179&units=metric"
        // const url = "https://api.openweathermap.org/data/2.5/forecast?q=Etawah,In&appid=d8bf74400b644252da4465f85ceb6179&units=metric"

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search},In&appid=d8bf74400b644252da4465f85ceb6179&units=metric`

        try {

            const responce = await fetch(url)
            const getData = await responce.json()

            if (getData.cod == "404") {
                setError("Not Found")
            } else {
                localStorage.setItem("data", JSON.stringify(getData))
            }
            await setData(getData)

        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        getFetchData()
    }, [])


    const handleClick = () => {
        getFetchData()

        setSearch(search)

    }

    const contextValue = {
        data, setData,
        search, setSearch,
        error, setError,
        handleClick
    }

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;