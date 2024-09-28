// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   pages: {
//     signIn: "/auth/signin", // Redirect if not authenticated
//   },
// });

export const config = {
  matcher: ["/", "/home"], // Add the paths you want to protect
};
