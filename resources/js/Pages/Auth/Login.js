import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form  onSubmit={submit}>
                <div>
                    <Label forInput="email" value="EMAIL" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4 text-white">
                    <Label forInput="password" value="PASSWORD" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        style={{backgroundColor:"#26262a"}}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center  mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="font-bold text-sm"
                            style={{color:"#7289DA"}}
                        >
                            Forgot your password?
                        </Link>
                    )}
                </div>
                <button style={{backgroundColor:"#7289DA",borderRadius:"5px"}} className="mt-3 p-3 text-white w-full" processing={processing}>
                    Log in
                </button>
                <div className="flex items-center  mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('register')}
                            className="font-bold text-sm"
                            style={{color:"#7289DA"}}
                        >
                            Need an account? Register
                        </Link>
                    )}
                </div>
            </form>
        </Guest>
    );
}
