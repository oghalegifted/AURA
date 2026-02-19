import { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    useEffect(() => {
        const handleOffcanvasOpen = () => {
            document.body.style.overflow = "auto"; // Allow scrolling
        };

        const handleOffcanvasClose = () => {
            document.body.style.overflow = "scroll"; // Reset to default
        };

        const offcanvasElement = document.getElementById("offcanvasExample");
        offcanvasElement.addEventListener("shown.bs.offcanvas", handleOffcanvasOpen);
        offcanvasElement.addEventListener("hidden.bs.offcanvas", handleOffcanvasClose);

        return () => {
            offcanvasElement.removeEventListener("shown.bs.offcanvas", handleOffcanvasOpen);
            offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleOffcanvasClose);
        };
    }, []);

    return (
        <>
            <a
                className="nav-link"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide A1 lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
                >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                </svg>
            </a>

            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <Link to={"/"}>
                        <h5 className="A1 offcanvas-title" id="offcanvasExampleLabel">
                            AURA
                        </h5>
                    </Link>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to={"/mth"}>
                            <li className="nav-item footer-text">Mathematics</li>
                        </Link>
                        <Link to={"/eng"}>
                            <li className="nav-item footer-text">English</li>
                        </Link>
                        <Link to={"/chm"}>
                            <li className="nav-item footer-text">Chemistry</li>
                        </Link>
                        <Link to={"/phy"}>
                            <li className="nav-item footer-text">Physics</li>
                        </Link>
                        <Link to={"/bio"}>
                            <li className="nav-item footer-text">Biology</li>
                        </Link>
                        <Link to={"/gst"}>
                            <li className="nav-item footer-text">General Studies</li>
                        </Link>
                        <Link to={"/comp"}>
                            <li className="nav-item footer-text">Computer</li>
                        </Link>
                    </ul>
                </div>
                <div className="" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Sidebar;