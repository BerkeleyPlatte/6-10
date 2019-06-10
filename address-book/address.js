function cl(data) {
  console.log(data);
}

const container = document.querySelector("#addressList");

document.querySelector("#saveEntry").addEventListener("click", event => {
  const personName = document.querySelector("#fullName").value;
  const personAddress = document.querySelector("#address").value;

  container.innerHTML += `
    <section>
    <h1>${personName}</h1>
    <div>${personAddress}</div>
    </section>
    `;
});

// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {

//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })
