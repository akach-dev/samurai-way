import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

const antIcon =
  <LoadingOutlined
    style={{fontSize: 154}} spin/>

export const PreLoader = () => <Spin indicator={antIcon}/>;