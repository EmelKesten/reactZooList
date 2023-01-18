import axios from "axios";




export const onSubmit = async () => {
  axios.get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin").then((response) => {
    console.log(response.data);
  }
  ).catch((error) => {
    console.log(error);
  });
};
// const options = {
  //   publicKey: {
  //     rp: { name: "Example"  },
  //     user: {
  //       id: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  //       name: "krusty@example.com",
  //       displayName: "Krusty The Clown",
  //     },
  //     challenge: new TextEncoder().encode("challenge"),
  //     pubKeyCredParams: [ { type: "public-key", alg: "-7" } ],
  //   },
  // };

  // const publicKeyCredential = await navigator.credentials.create(options);
  // console.log(publicKeyCredential);
export const onSubmit2 = async () => {
  const options = {
    publicKey: {
      rp: { name: "Example"  },
      user: {
        id: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        name: "krusty@example.com",
        displayName: "Krusty The Clown",
      },
      challenge: new TextEncoder().encode("challenge"),
      pubKeyCredParams: [ { type: "public-key", alg: "-7" } ],
    },
  };

  const publicKeyCredential = await navigator.credentials.get(options);
  console.log(publicKeyCredential);
};
