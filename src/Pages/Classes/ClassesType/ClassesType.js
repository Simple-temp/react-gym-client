import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import loading from "../../../img/loading.gif"
import "./ClassesType.css"

const ClassesType = () => {

    const [gym, setGym] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/getgymservices`)
            .then(res => res.json())
            .then(data => setGym(data))
    }, [])

    return (
        <section class="classestype">
            <div className="container">
                <div className="row">
                    {
                        gym.length === 0 ? <img src={loading} alt="" style={{width:"300px"}} className="mx-auto"/> :
                        gym.map(gymservices => <ShowGym gymservices={gymservices}></ShowGym>)
                    }
                </div>
            </div>
        </section>
    );
};

function ShowGym({ gymservices }) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="gym-box">
                    <img src={`data:image/png;base64,${gymservices.image.img}`} alt="" className='img-fluid w-100' style={{ height: "290px" }} />
                    <div className="tit">
                        <Link to={`/advancedgym/${gymservices.key}`} className="link"><p>{gymservices.title}</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClassesType;







































/*


        const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleblur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo);
        console.log(newInfo)
    }

    const handlechange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
        console.log(newFile)
    }

    const fromsubmit = (e) => {

        const fromData = new FormData()
        fromData.append("file", file)
        fromData.append("title", info.title)
        fromData.append("des", info.des)
        fromData.append("key", info.key)

        fetch(`http://localhost:4000/postgymitem`, {
            method: "POST",
            body: fromData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("data submitted")
            })
            .catch(error => console.log(error))
    }

    
                <div className="col-lg-8">
                    <form action="" onSubmit={fromsubmit}>
                        <input onBlur={handleblur} name="title" type="text" placeholder='name' className='w-100 mt-2 d-block p-3' />
                        <input onBlur={handleblur} name="key" type="text" placeholder='name' className='w-100 mt-2 d-block p-3' />
                        <textarea onBlur={handleblur} name="des" id="" cols="30" rows="10" className='w-100 mt-2 d-block p-3'></textarea>
                        <input onChange={handlechange} name="file" type="file" />
                        <input type="submit" value="Upload data" className='custom-btn' />
                    </form>
                </div>

*/