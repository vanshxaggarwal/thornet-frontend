import React, { useState, useEffect } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import {    
    IconButton,
    Switch,
    Typography,    
} from "@material-tailwind/react";
import {
    useMaterialTailwindController,
    setOpenConfigurator,
    setProdMode
} from "@/context";
export function Settings() {    
    const navigate = useNavigate();
    const [controller, dispatch] = useMaterialTailwindController();
    const { openConfigurator, isProd } = controller;
    return (
        <aside
            className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${openConfigurator ? "translate-x-0" : "translate-x-96"
                }`}>
            <div className="flex items-start justify-between px-6 pt-8 pb-6">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Settings
                    </Typography>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => setOpenConfigurator(dispatch, false)}
                >
                  <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
                </IconButton>
            </div>
            <div className="py-4 px-6">                              
                <div className="mb-12">
                    <hr />
                    <div className="flex items-center justify-between py-5">
                        <Typography variant="h6" color="blue-gray">
                            Production Mode
                        </Typography>                        
                        <Switch
                            id="navbar-fixed"
                            checked={ JSON.parse(localStorage.getItem("isProd")) }
                            onChange={() => {
                                setProdMode(dispatch, !isProd);                                
                                navigate("/reload");
                                setTimeout(() => { navigate("/dashboard/home"); }, 100);                                
                            }}
                        />
                    </div>
                </div>                
            </div>
        </aside>
    );
}
Settings.displayName = "/src/widgets/layout/settings.jsx";

export default Settings;
