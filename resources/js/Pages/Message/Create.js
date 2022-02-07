import React from "react";
import {useForm} from "@inertiajs/inertia-react";


const Message = () => {
    const {setData, data, post} = useForm({
        channel_name: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("message.store"));
    }
    return (
        <>
            <div>
                <div>
                    <h1
                        className="text-center pt-5 text-2xl font-bold text-white"
                    >
                        Create Text Channel
                    </h1>
                    <div className="text-center" style={{color:"#afaeae"}}>in Voice channel</div>
                        <form
                            className="text-center input-group"
                            onSubmit={handleSubmit}
                        >
                            <div className="p-9">
                                <div className="input-group ">
                                    <label className="text-white font-bold absolute left-0 pl-3">
                                        CHANNEL NAME :
                                    </label>
                                    <br/>
                                    <input
                                        className="-ml-32 mt-3"
                                        style={{backgroundColor:"#363A3F"}}
                                        name="channel_name"
                                        type="text"
                                        value={data.channel_name}
                                        onChange={(e) => {
                                            setData(
                                                "channel_name",
                                                e.target.value
                                            );
                                        }}
                                        placeholder="# new-channel"
                                    />
                                </div>
                            </div>
                            <div style={{backgroundColor:"#2F3135",height:"100%",width:"100%",marginTop:"95px",borderRadius:"0 0 10px 10px"}} className="flex">
                                <div className="p-7">
                                    <button
                                        className="w-36 h-10 ml-44"
                                        style={{
                                            backgroundColor: "#596EF2",
                                            borderColor: "#1234",
                                            borderRadius: "0.75rem",
                                        }}
                                        type="submit"
                                    >
                                        Create Channel
                                    </button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        </>
    );
};

export default Message;
