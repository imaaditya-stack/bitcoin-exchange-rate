import React from "react";
import { SidebarLinks } from "../config/SidebarConfig";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Acazda from "../svgs/Acazda";

const SidebarContainer = () => {
  return (
    <div className="sidebar">
      <List>
        <br />
        <center>
          <Acazda />
        </center>
        <div className="tools my-5">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.4036 10.7231L24.8866 17.0013L23.5496 15.5856L28.4816 10.834C28.9586 10.3745 28.9716 9.61617 28.5116 9.13961L24.1086 4.57783C23.8856 4.34804 23.5856 4.21716 23.2656 4.21217C22.9486 4.20517 22.6416 4.32606 22.4116 4.54686L18.5246 8.29039L21.8996 11.7822C22.1756 12.0709 22.1536 12.5465 21.8646 12.8272C21.6616 13.021 21.3646 13.082 21.1126 13L16.2166 7.81383L22.6226 1.63655C23.0116 1.26589 23.6356 1.28687 24.0086 1.67352L31.4136 9.34242C31.7866 9.72806 31.7866 10.3505 31.4036 10.7231ZM9.27964 29.3359C9.05264 29.5567 8.74465 29.6776 8.42764 29.6696C8.10864 29.6636 7.80564 29.5327 7.58364 29.3059L3.18065 24.7422C2.72165 24.2656 2.73365 23.5143 3.21065 23.0507L5.23565 25.1528C5.51465 25.4415 5.97265 25.4495 6.26164 25.1738C6.55064 24.898 6.55665 24.4414 6.27665 24.1517L4.25465 22.0467L4.79365 21.5261L6.81865 23.6282C7.09564 23.9149 7.55365 23.9249 7.84465 23.6492C8.13264 23.3684 8.13964 22.9139 7.85964 22.6231L5.83565 20.5241L6.37565 20.0036L8.39865 22.1036C8.67765 22.3903 9.13765 22.4003 9.42465 22.1246C9.71564 21.8468 9.72064 21.3913 9.44265 21.1005L7.41764 19.0005L7.95665 18.48L9.98164 20.578C10.2596 20.8688 10.7176 20.8777 11.0076 20.599C11.1146 20.4951 11.1846 20.3652 11.2126 20.2313L7.46364 16.255L0.289646 23.1616C-0.094354 23.5343 -0.094354 24.1587 0.276646 24.5434L7.68164 32.2172C8.05365 32.6029 8.67965 32.6239 9.06365 32.2492L16.1306 25.4435L14.7946 24.0278L9.27964 29.3359ZM22.2186 10.4804C21.2846 9.51626 21.3126 7.97169 22.2806 7.04155C23.2436 6.10941 24.7886 6.13739 25.7196 7.10249C26.6536 8.0686 26.6206 9.61317 25.6576 10.5413C24.6966 11.4734 23.1516 11.4455 22.2186 10.4804ZM23.2636 9.4733C23.6396 9.85894 24.2596 9.86993 24.6516 9.49628C25.0386 9.12162 25.0496 8.5002 24.6736 8.11256C24.2986 7.72492 23.6766 7.71193 23.2886 8.08658C22.9006 8.46123 22.8886 9.08266 23.2636 9.4733ZM27.1966 21.9308L20.8236 27.9302L6.62065 12.8742L12.9956 6.8747L27.1966 21.9308ZM14.0646 11.0728C14.0676 10.929 14.0156 10.7871 13.9136 10.6812L13.2196 9.94786C13.0136 9.72906 12.6666 9.71807 12.4456 9.92488L12.0696 10.2776C11.8486 10.4834 11.8396 10.833 12.0456 11.0508L12.7356 11.7892C12.8386 11.8951 12.9746 11.959 13.1216 11.96C13.2666 11.966 13.8906 11.4575 13.8906 11.4575C13.9966 11.3566 14.0586 11.2187 14.0646 11.0728ZM23.9306 22.1016C24.1536 21.8938 24.1616 21.5461 23.9526 21.3263L15.9736 12.8692C15.8736 12.7613 15.7376 12.6993 15.5896 12.6963C15.4466 12.6913 15.3036 12.7463 15.1986 12.8442L14.8216 13.1998C14.6006 13.4067 14.5906 13.7523 14.7986 13.9731L22.7766 22.4313C22.8806 22.5372 23.0146 22.6011 23.1636 22.6051C23.3096 22.6101 23.4506 22.5552 23.5576 22.4553L23.9306 22.1016ZM5.97565 12.1878L12.3486 6.18634L10.7026 4.44195L4.33065 10.4444L5.97565 12.1878ZM1.48965 7.42919C1.14265 7.06153 0.958646 6.57698 0.972646 6.07344C0.988646 5.57091 1.20165 5.09735 1.56865 4.75267L5.18065 1.35281C5.94065 0.631481 7.14065 0.668447 7.85964 1.42974L10.0986 3.80255L3.72565 9.80199L1.48965 7.42919ZM2.62665 6.1234L3.79665 7.36625L7.65965 3.72961L6.48665 2.48876L2.62665 6.1234ZM30.4296 30.5008C30.5386 30.8465 30.4396 31.2232 30.1776 31.4709C29.9136 31.7197 29.5316 31.7926 29.1946 31.6638L21.6306 28.7804L27.9966 22.779L30.4296 30.5008ZM28.4086 27.9092L27.4516 24.873L23.7506 28.3608L26.7286 29.4958L28.4086 27.9092Z"
              fill="#707070"
            />
          </svg>
          <span className="ml-4">Tools</span>
        </div>
        {SidebarLinks.map((item) => {
          return (
            <ListItem button className={item.active && `active`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default SidebarContainer;