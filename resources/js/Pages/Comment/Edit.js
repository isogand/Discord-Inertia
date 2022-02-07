import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {usePage, useForm} from "@inertiajs/inertia-react";

const Comments = () => {
    const {comment} = usePage().props;

    const {data, setData, put} = useForm({
        comment: comment.data.comment || "" ,

    });
    console.log("comment", comment);
    function handleSubmit(e) {
        e.preventDefault();
        // NOTE: We are using POST method here, not PUT/PACH. See comment above.
        put(route("comment.update",comment.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("comment.destroy", comment.data.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this user?")) {
            Inertia.put(route("comment.restore", comment.data.id));
        }
    }

    return (
        <>
            <div>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <input
                            name="comment"
                            style={{backgroundColor:"#474B53"}}
                            value={data.comment}
                            placeholder="Message"
                            onChange={(e) =>
                                setData("comment", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <button  type="submit" style={{backgroundColor:"#596EF2",padding:"5px",borderRadius:"5px"}}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Comments;
