import "./Header.scss";

import{ useDispatch} from "react-redux";
import{ bindActionCreators} from "redux";
import { NavLink } from "react-router-dom";

import settingsActionCreators from "@store/creators/settings.creator.js";

import Flex from '../Flex/Flex';
import Navbar from '../Navbar/Navbar';
import LangSwitch from '../LangSwitch/LangSwitch';
import Select from '../Select/Select';
import LoaderLine from '../LoaderLine/LoaderLine';


function Header() {
  const dispatch = useDispatch();
  const { setMode } = bindActionCreators(settingsActionCreators, dispatch);

  function selectChange(str){
     setMode(str);
  }

  return (
    <div id="HEADER">
      <LoaderLine></LoaderLine>
      <Flex>
        <NavLink className="h1-link" to="yt-downloader-site/"><h1>YT DOWNLOADER</h1></NavLink>
        <Navbar></Navbar>
        <Select title="Mode" options={["video","playlist","music"]} handleChange={selectChange}></Select>
        {/* <LangSwitch></LangSwitch> */}
      </Flex>
    </div>
  );
}

export default Header;
