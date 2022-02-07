import React from "react";
import {Inertia} from "@inertiajs/inertia";
import {usePage, useForm} from "@inertiajs/inertia-react";

const Messagess = () => {
    const {message} = usePage().props;
    console.log("message", message);
    const {data, setData, put} = useForm({
        channel_name: message.data.channel_name || '',
    });
    console.log("message", message);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("message.update", message.data.id));
    }

    function destroy() {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("message.destroy", message.data.id));
        }
    }

    function restore() {
        if (confirm("Are you sure you want to restore this user?")) {
            Inertia.put(route("message.restore", message.data.id));
        }
    }

    return (
        <>
            <div>
                        <form  onSubmit={handleSubmit}>
                                  <div>
                                      <input
                                          name="channel_name"
                                          style={{backgroundColor:"#474B53"}}
                                          value={data.channel_name}
                                          placeholder="Message"
                                          onChange={(e) =>
                                              setData("channel_name", e.target.value)
                                          }
                                      />
                                  </div>
                            <button onClick={destroy}>
                                <div style={{backgroundColor:"#fad7d7",width: "80%",borderColor:"#1234",borderRadius: "0.75rem"}}  type="submit">
                                    Delete Organization
                                </div>
                            </button>
                        </form>

            </div>
        </>
    );
};

export default Messagess;
