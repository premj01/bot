const helpMenu = (refMSG, refClient) =>{
    const list = 
  `\`\`\`Help menu is here\`\`\` 😄
   1. *AI Assistant*
   2. *URL shortner*
   3. *About Us*
   4. *Help*
   
   
_for detailed infomation type_
 _for example,_
  _>> *help 1* - for detail AI info_
  _>> *help 2* - for URL Shortner Guide & so on_
     
            Assistant Nebula...`;
    // console.log(list);

    const listAI = ``;
    const listURLShrotner = ``;


    refClient.sendMessage(refMSG.from ,  list)
}

// helpMenu(123  , 122)
module.exports = helpMenu;