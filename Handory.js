console.log("hi");
function menu(){
const services = [
  "Paintings",
  "Handicrafts",
  "Handloom",
  "Pottery"/*,
  "Jewelry",
  "Workshop"*/
];

  const menu_bar = document.querySelector(".menu_bar");
 // menu_bar.innerHTML="";
  for(let i=0;i<services.length;i++){
    const m_b_space = document.createElement("div");
  m_b_space.classList.add("m_b_space");
  
  const m_b_pic = document.createElement("div");
  m_b_pic.classList.add("m_b_pic");
  m_b_pic.style.backgroundImage=`url('Menu pics/m${i+1}.png')`
  m_b_space.append(m_b_pic);
  
  const m_b_text = document.createElement("div");
  m_b_text.classList.add("m_b_text");
  m_b_text.innerText=services[i];
  m_b_space.append(m_b_text);
  
  menu_bar.append(m_b_space);
  
  }
}
menu();

console.log("Hello world");