import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import "./header.css"

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="row" data-aos="fade-down"
     data-aos-easing="linear"
    >
        <div className="col-md-1"></div>
        <div className=" header_cont col-md-10">
          <div className="site-header-inner">
            <div className="brand">
              <img src="images/logo.2810a88b.svg" alt="logo" />
            </div>
            <div className="header-nav">
              <div className="header-nav-inner">
                <ul className="list-reset text-xs header-nav-right">
                  <li >
                    <a className="docName" href="/#0">Documentation</a>
                  </li>
                </ul>
                <ul className="list-reset header-nav-right">
                  <li>
                    <a
                      className="button button-primary button-wide-mobile button-sm"
                      href="/#0"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
};

export default Header;

{
  /* <header className="site-header reveal-from-bottom is-revealed"><div className="container"><div className="site-header-inner"><div className="brand"><h1 className="m-0"><a href="/"><img src="/static/media/logo.2810a88b.svg" width="32" height="32" alt="Open" style=""></a></h1></div><button className="header-nav-toggle"><span className="screen-reader">Menu</span><span className="hamburger"><span className="hamburger-inner"></span></span></button><nav className="header-nav"><div className="header-nav-inner"><ul className="list-reset text-xs header-nav-right"><li><a href="/#0">Documentation</a></li></ul><ul className="list-reset header-nav-right"><li><a className="button button-primary button-wide-mobile button-sm" href="/#0">Sign up</a></li></ul></div></nav></div></div></header> */
}
