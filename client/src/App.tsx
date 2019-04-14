import * as React from "react";

const App: React.FC = () => {
    const [message, setMessage] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            console.log("MOUNTED BABY");
            const request = new Request("http://localhost:3000/data", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            });

            const thisFetch = await fetch(request);
            const myData = await thisFetch.json();
            setMessage(myData.message);
        };
        fetchData();
    });
    return <div>Hello farts world! message: {message}</div>;
};

export default App;
