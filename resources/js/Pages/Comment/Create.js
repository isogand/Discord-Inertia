import React, {useEffect} from "react";
import {useForm} from "@inertiajs/inertia-react";
import {useSelector} from "react-redux";
import {selectChannelId} from "@/Pages/Store/appSlice";


const Commen = (props) => {
    const {setData, post,data} = useForm({
        comment: "",
        photo:"",
        channel_id : undefined,
    });
    const channel_id = useSelector(selectChannelId);
    useEffect(() => {
        setData("channel_id",channel_id)
    }, [channel_id]);

    function handleSubmit(e) {
        e.preventDefault();
        post(route("comment.store"));
    }
    return (
        <>
            <div>
                <div>

                    <form
                        className="text-center input-group"
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="comment"
                            style={{backgroundColor:"#474B53"}}
                            value={data.comment}
                            placeholder="Message"
                            onChange={(e) =>
                                setData("comment", e.target.value)
                            }
                        />
                        {/*<input*/}
                        {/*    type="file"*/}
                        {/*    name="photo"*/}
                        {/*    onChange={(e) =>*/}
                        {/*        setData("photo", e.target.files[0])*/}
                        {/*    }*/}
                        {/*/>*/}
                        {/*<div className=" bg-green-500">*/}
                        {/*    <button*/}
                        {/*        type="submit"*/}
                        {/*    >*/}
                        {/*        Create*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Commen;
