import { products } from "./products.js";
document.getElementById("results").innerHTML = ``;
products.forEach((element) => {
    document.getElementById("results").innerHTML += `
                    <div class="text-lg text-gray-900 border-2 border-gray-200 rounded-lg p-4 m-4 bg-cyan-100">
                    <a href="${element.addr}" target="_blank">
                        <div class="flex justify-items-end justify-center">
                        <img class="h-64 w-auto rounded-lg" src="${element.url}" alt="Picture"></div>
                        <div class="des">
                            <div class="text-xl flex-wrap font-mono w-64">${element.brand}</div>
                            <div class="text-base flex flex-wrap w-64">${element.naam}</div>
                            <div class="text-lg flex justify-end">${element.price}</div>
                        </div>
                    </a>
                    </div>`;
})

const searchButton = document.getElementById("searchButton");
var searchBar = document.getElementById("searchInput");
searchBar.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        // event.preventDefault();
        searchButton.click();
    }
});

searchButton.addEventListener("click", function () {
    const searchInput = document.getElementById("searchInput");
    let search_result_array = products.filter((element) => { return element.naam.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1 });
    document.getElementById("results").innerHTML = ``;
    if (search_result_array.length == 0) {
        document.getElementById("results").innerHTML += `
        <p class="pt-6 text-lg leading-8 text-gray-600">No Results were found. Please, try searching for something else.</p>
        `;
    } else {
        search_result_array.forEach((element) => {
            document.getElementById("results").innerHTML += `
                    <div class="text-lg text-gray-900 border-2 border-gray-200 rounded-lg p-4 m-4 bg-cyan-100">
                    <a href="${element.addr}" target="_blank">
                        <div class="flex justify-items-end justify-center">
                        <img class="h-64 w-auto rounded-lg" src="${element.url}" alt="Picture"></div>
                        <div class="des">
                            <div class="text-xl flex-wrap font-mono w-64">${element.brand}</div>
                            <div class="text-base flex flex-wrap w-64">${element.naam}</div>
                            <div class="text-lg flex justify-end">${element.price}</div>
                        </div>
                    </a>
                    </div>`;
        })
    }

    // let flag = 0;
    // let ans = -1;
    // const searchTerm = searchInput.value.toLowerCase();
    // for (let index = 0; index < products.length; index++) {
    //     if (products[index].naam.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
    //         ans = index;
    //         let res = products[ans];
    //         console.log(res);
    //         if (flag == 0) {
    //             document.getElementById("results").innerHTML = `
    //                 <div class="text-lg text-gray-900 border-2 border-gray-200 rounded-lg p-4 m-4 bg-cyan-100">
    //                     <div class="flex justify-items-end justify-center">
    //                     <img class="h-64 w-auto rounded-lg" src="${res.url}" alt="Picture"></div>
    //                     <div class="des">
    //                         <div class="text-xl font-mono">${res.brand}</div>
    //                         <div class="text-base flex flex-wrap w-64">${res.naam}</div>
    //                         <div class="text-lg flex justify-end">${res.price}</div>
    //                     </div>
    //                 </div>`;
    //             flag++;
    //         } else {
    //             document.getElementById("results").innerHTML += `
    //                 <div class="text-lg text-gray-900 border-2 border-gray-200 rounded-lg p-4 m-4 bg-cyan-100">
    //                     <div class="flex justify-items-end justify-center">
    //                     <img class="h-64 w-auto rounded-lg" src="${res.url}" alt="Picture"></div>
    //                     <div class="des">
    //                         <div class="text-xl font-mono">${res.brand}</div>
    //                         <div class="text-base flex flex-wrap w-64">${res.naam}</div>
    //                         <div class="text-lg flex justify-end">${res.price}</div>
    //                     </div>
    //                 </div>`;
    //         }
    //     }
    // }
});


// import { products } from "./products.js";

// const searchButton = document.getElementById("searchButton");
// var searchBar = document.getElementById("searchInput");
// searchBar.addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//         searchButton.click();
//     }
// });

// searchButton.addEventListener("click", function () {
//     const searchInput = document.getElementById("searchInput");
//     let search_result_array = products.filter((element) => { return element.naam.toLowerCase().indexOf(searchInput.value.toLowerCase()) != -1 });
//     document.getElementById("results").innerHTML = ``;
//     if (search_result_array.length == 0) {
//         document.getElementById("results").innerHTML += `
//         <p class="pt-6 text-lg leading-8 text-gray-600">No Results were found. Please, try searching for something else.</p>
//         `;
//     } else {
//         search_result_array.forEach((element) => {
//             document.getElementById("results").innerHTML += `
//                     <div class="text-lg text-gray-900 border-2 border-gray-200 rounded-lg p-4 m-4 bg-cyan-100">
//                     <a href="${element.addr}" target="_blank">
//                         <div class="flex justify-items-end justify-center">
//                         <img class="h-64 w-auto rounded-lg" src="${element.url}" alt="Picture"></div>
//                         <div class="des">
//                             <div class="text-xl flex-wrap font-mono w-64">${element.brand}</div>
//                             <div class="text-base flex flex-wrap w-64">${element.naam}</div>
//                             <div class="text-lg flex justify-end">${element.price}</div>
//                         </div>
//                     </a>
//                     </div>`;
//         })
//     }
