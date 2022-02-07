import React, {useState} from "react";
import {Inertia} from "@inertiajs/inertia";
import {usePage, useForm, Link} from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";


const Edit = () => {
    const {data: user} = usePage().props.user;

    const {data, setData, post} = useForm({
        name: user.name,
        email: user.email,
        photo: user.photo,
        phone:user.phone,
        _method: "PUT",
    });
    // console.log(user);
    function handleSubmit(e) {
        e.preventDefault();
        post(route("user.update", user.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("user.destroy", user.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this user?")) {
            Inertia.put(route("user.restore", user.id));
        }
    }


    const [image, setImage] = useState({ preview: "", raw: "" });


    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };
    return (
        <>
            <div style={{display:"flex"}}>
                <div style={{width:"30%",backgroundColor:"#2E3136"}}></div>
                <div style={{backgroundColor:"#36393E",height:"981px",width:"70%"}}>
                    <div className="p-9">
                        <div style={{display:"flex"}}>
                            <div style={{width:"70%",fontSize:"30px",marginLeft:"30px",font:"sans-serif",fontWeight:"bold"}} className="flex-none -pb-10 text-white">My Account</div>
                            <Dropdown.Link  method="get" href={route("dashboard")}>
                                <img src={("/images/ESC.svg")}  alt="logo"/>
                               <div className="p-1 text-white">ESC</div>
                            </Dropdown.Link>
                        </div>
                        <div className="p-9 ">
                            <div className="max-w-3xl overflow-hidden shadow-lg -mt-7 rounded-xl">
                                <div style={{backgroundColor:"#FAA84A",height:"100px"}}></div>
                                <form onSubmit={handleSubmit}>
                                    <div style={{backgroundColor:"#23272A"}}
                                        className="flex flex-wrap p-8 -mb-8 -mr-6"
                                    >
                                        <div>
                                            <label htmlFor="upload-button">
                                                {user.photo ? (
                                                    <img
                                                        style={{marginTop:"-50px",border:"6px solid #23272A"}}
                                                        className="block w-24 h-24 rounded-full"
                                                        src={`/images/${user.photo}`}
                                                    />
                                                ) : (
                                                    <>
                                                    <span className="fa-stack fa-2x mt-3 mb-2">
                                                      <i className="fas fa-circle fa-stack-2x" />
                                                      <i className="fas fa-store fa-stack-1x fa-inverse" />
                                                    </span>
                                                        <h5 className="text-center">
                                                            <img  style={{marginTop:"-50px",border:"6px solid #23272A"}}
                                                                  className="block w-24 h-24 rounded-full"
                                                                  src={`/images/discord2.jpg`}
                                                            />
                                                        </h5>
                                                    </>
                                                )}
                                            </label>
                                            <input
                                                type="file"
                                                name="photo"
                                                id="upload-button"
                                                style={{ display: "none" }}
                                                onChange={(e) =>
                                                    setData("photo", e.target.files[0])
                                                }
                                            />
                                            <br />
                                            <button style={{color:"#23272A",fontSize:"2px"}} onClick={handleUpload}>Upload</button>
                                        </div>

                                        <div style={{display:"flex",marginTop:"-10px"}}>

                                                <div style={{color:"#ffffff",font:"sans-serif",fontWeight:"bold",fontSize:"20px"}} className="text-indigo-400 ml-5">{user.name}</div>
                                                <div style={{color:"#c2c1c1",fontSize:"20px"}} className="text-indigo-400 ">#{user.uid}</div>

                                            <div className="pl-80">
                                                <button  type="submit" style={{backgroundColor:"#596EF2",padding:"5px",borderRadius:"5px"}}>
                                                    Edit User Profile
                                                </button>
                                            </div>
                                        </div>

                                       <div className="p-4 -mt-5 mr-5 mb-5 w-full" style={{backgroundColor:"#36393E",borderRadius:"10px",marginTop:"-30px"}}>
                                        <div>
                                            <label style={{font:"sans-serif",fontWeight:"bold",color:"#c4b5b5"}}>USERNAME</label>
                                            <br/>
                                            <input
                                                style={{backgroundColor:"#36393E" ,color:"white",fontSize:"20px",}}
                                                name="name"
                                                className="w-full pb-8 pr-6 lg:w-1/2 "
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData("name", e.target.value)
                                                }
                                            />
                                            <br/>
                                            <label style={{font:"sans-serif",fontWeight:"bold",color:"#c4b5b5"}}>EMAIL</label>
                                            <br/>
                                            <input
                                                style={{backgroundColor:"#36393E" ,color:"white",fontSize:"20px",font:"sans-serif",fontWeight:"bold"}}
                                                className="w-full pb-8 pr-6 lg:w-1/2"
                                                value={data.email}
                                                name="email"
                                                label="Email"
                                                placeholder="email"
                                                onChange={(e) =>
                                                    setData("email", e.target.value)
                                                }
                                            />
                                            <br/>
                                            <label style={{font:"sans-serif",fontWeight:"bold",color:"#c4b5b5"}}>PHONE NUMBER</label>
                                            <br/>
                                            <input
                                                style={{backgroundColor:"#36393E",color:"white",fontSize:"20px",font:"sans-serif",fontWeight:"bold"}}
                                                className="pb-8 pr-6 text-white"
                                                value={data.phone}
                                                name="phone"
                                                placeholder="You haven't added a phone number yet."
                                                onChange={(e) =>
                                                    setData("phone", e.target.value)
                                                }
                                            />
                                        </div>
                                       </div>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Edit;
