import { auth } from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      data: response,
      message: "User signed in successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: null,
      message: "User signed in failed",
    };
  }
};

export const signUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return {
      success: true,
      data: response,
      message: "User signed in successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: null,
      message: "User signed in failed",
    };
  }
};
