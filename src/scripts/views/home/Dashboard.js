import React, { useEffect, useState } from "react";
// import Header from "../../components/Header";

const Dashboard = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8080/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials : 'include',
                });
                
                const content = await response.json();

                setName(content.name);
            }
        )();
    });

    return(
        <div>
            hi {name}
        {/* <Header /> */}
        </div>
        
    )
}

export default Dashboard;