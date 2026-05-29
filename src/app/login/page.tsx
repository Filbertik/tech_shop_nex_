"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (login === "admin" && password === "admin") {
      // 🔥 просто ставимо cookie
      document.cookie = "admin=true; path=/";

      router.push("/admin/products");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: 40 }}>
      <h1>Login</h1>

      <input
        placeholder="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: any) => {
//     e.preventDefault();

//     console.log("LOGIN CLICKED", login, password);

//     if (login === "admin" && password === "admin") {
//       document.cookie = "admin=true; path=/";
//       router.push("/admin/products");
//     } else {
//       alert("Wrong credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         placeholder="login"
//         value={login}
//         onChange={(e) => setLogin(e.target.value)}
//       />

//       <input
//         placeholder="password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function LoginPage() {
// //   const router = useRouter();
// //   const [login, setLogin] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async () => {
// //     if (login === "admin" && password === "admin") {
// //       document.cookie = "admin=true; path=/";
// //       router.push("/admin/products");
// //     } else {
// //       alert("Wrong credentials");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: 40 }}>
// //       <h1>Login</h1>

// //       <input
// //         placeholder="login"
// //         value={login}
// //         onChange={(e) => setLogin(e.target.value)}
// //       />

// //       <input
// //         placeholder="password"
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />

// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // }

// // // "use client";

// // // import { useRouter } from "next/navigation";
// // // import { useState } from "react";

// // // export default function Login() {
// // //   const router = useRouter();
// // //   const [login, setLogin] = useState("");
// // //   const [pass, setPass] = useState("");

// // //   const enter = () => {
// // //     if (login === "admin" && pass === "admin") {
// // //       document.cookie = "auth=1; path=/";
// // //       router.push("/admin/products");
// // //     } else {
// // //       alert("wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <input onChange={(e) => setLogin(e.target.value)} />
// // //       <input type="password" onChange={(e) => setPass(e.target.value)} />
// // //       <button onClick={enter}>login</button>
// // //     </div>
// // //   );
// // // }

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { useRouter } from "next/navigation";

// // // // export default function LoginPage() {
// // // //   const router = useRouter();
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const handleLogin = () => {
// // // //     console.log("LOGIN CLICKED");

// // // //     if (email === "admin" && password === "admin") {
// // // //       // важливо: додаємо expires + path
// // // //       document.cookie = "admin=true; path=/; max-age=86400; SameSite=Lax";

// // // //       console.log("COOKIE SET:", document.cookie);

// // // //       router.push("/admin/products");
// // // //       router.refresh();
// // // //     } else {
// // // //       alert("Wrong credentials");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: 40 }}>
// // // //       <h1>Login</h1>

// // // //       <input
// // // //         placeholder="login"
// // // //         value={email}
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //       />

// // // //       <input
// // // //         placeholder="password"
// // // //         type="password"
// // // //         value={password}
// // // //         onChange={(e) => setPassword(e.target.value)}
// // // //       />

// // // //       <button onClick={handleLogin}>Login</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { useRouter } from "next/navigation";

// // // // // export default function LoginPage() {
// // // // //   const router = useRouter();
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");

// // // // //   const handleLogin = () => {
// // // // //     if (email === "admin" && password === "admin") {
// // // // //       document.cookie = "admin=true; path=/; max-age=86400";

// // // // //       router.push("/admin/products");
// // // // //       router.refresh();
// // // // //     } else {
// // // // //       alert("Wrong credentials");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ padding: 40 }}>
// // // // //       <h1>Login</h1>

// // // // //       <input
// // // // //         placeholder="login"
// // // // //         value={email}
// // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // //       />

// // // // //       <input
// // // // //         placeholder="password"
// // // // //         type="password"
// // // // //         value={password}
// // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // //       />

// // // // //       <button onClick={handleLogin}>Login</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { useRouter } from "next/navigation";

// // // // // // export default function LoginPage() {
// // // // // //   const router = useRouter();

// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");

// // // // // //   const handleLogin = () => {
// // // // // //     // 🔥 простий хардкод (пізніше замінимо на БД)
// // // // // //     if (email === "admin@shop.com" && password === "admin123") {
// // // // // //       document.cookie = "admin=true; path=/";
// // // // // //       router.push("/admin/products");
// // // // // //     } else {
// // // // // //       alert("Невірний логін або пароль");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{ padding: 40 }}>
// // // // // //       <h1>Admin Login</h1>

// // // // // //       <input
// // // // // //         placeholder="email"
// // // // // //         value={email}
// // // // // //         onChange={(e) => setEmail(e.target.value)}
// // // // // //         style={{ display: "block", marginBottom: 10 }}
// // // // // //       />

// // // // // //       <input
// // // // // //         placeholder="password"
// // // // // //         type="password"
// // // // // //         value={password}
// // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // //         style={{ display: "block", marginBottom: 10 }}
// // // // // //       />

// // // // // //       <button onClick={handleLogin}>Login</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { useRouter } from "next/navigation";

// // // // // // // export default function LoginPage() {
// // // // // // //   const router = useRouter();

// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");

// // // // // // //   const login = async () => {
// // // // // // //     const res = await fetch("/api/login", {
// // // // // // //       method: "POST",
// // // // // // //       body: JSON.stringify({ email, password }),
// // // // // // //     });

// // // // // // //     if (res.ok) {
// // // // // // //       router.push("/admin/products");
// // // // // // //     } else {
// // // // // // //       alert("Wrong login");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div style={{ padding: 40 }}>
// // // // // // //       <h1>Login</h1>

// // // // // // //       <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
// // // // // // //       <br />
// // // // // // //       <br />

// // // // // // //       <input
// // // // // // //         placeholder="password"
// // // // // // //         type="password"
// // // // // // //         onChange={(e) => setPassword(e.target.value)}
// // // // // // //       />
// // // // // // //       <br />
// // // // // // //       <br />

// // // // // // //       <button onClick={login}>Login</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
