import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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

function formatNumber(number, decPlaces) {
    decPlaces = Math.pow(10, decPlaces);

    const abbrev = ["K", "M", "B", "T"];

    for (let i = abbrev.length - 1; i >= 0; i--) {
        var size = Math.pow(10, (i + 1) * 3);

        if (size <= number) {
            number = Math.round((number * decPlaces) / size) / decPlaces;

            if (number == 1000 && i < abbrev.length - 1) {
                number = 1;
                i++;
            }

            number += abbrev[i];

            break;
        }
    }

    return number;
}

export function Settings() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { openConfigurator, isProd } =
        controller;
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
                            onChange={() => setProdMode(dispatch, !isProd)}
                        />
                    </div>
                </div>                
            </div>
        </aside>
    );
}
Settings.displayName = "/src/widgets/layout/settings.jsx";

export default Settings;
