import { CentredContainer } from "../../components/auth/CentredContainer";
import { AuthBottomRedirect } from "../../components/auth/AuthBottomRedirect";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ALERT_CLASSES } from "../../constants";
import { useAuth } from "../../contexts/AuthContext";
import { useAlert } from "../../contexts/AlertContext";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { showAlert } = useAlert();
  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth(null);

  async function onSubmit(data) {
    try {
      setLoading(true);
      await resetPassword(data.email);
      setLoading(false);
      showAlert(
        ALERT_CLASSES.SUCCESS,
        "Check your inbox for further instructions.",
      );
    } catch {
      setTimeout(() => {
        setLoading(false);
      }, 300);
      showAlert(ALERT_CLASSES.ERROR, "Failed to reset the password.");
    }
  }

  return (
    <CentredContainer>
      <AuthHeader
        title="Reset password"
        subtitle="Fill up the form to get instructions"
      />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="label">
            <span className="label-text text-base">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
            type="text"
            autoComplete="email"
            placeholder="Email Address"
            className={
              "input input-bordered w-full" +
              (showErrors && errors.email ? " input-error" : "")
            }
          />
          {showErrors && errors.email && (
            <p className="text-error">{errors.email.message}</p>
          )}
        </div>

        <button
          disabled={loading}
          className="btn btn-primary btn-block"
          type="submit"
          onClick={() => setShowErrors(true)}
        >
          Reset Password
        </button>

        <AuthBottomRedirect
          text="Remember your password?"
          linkText="Login here"
          linkTo="/login"
        />
      </form>
    </CentredContainer>
  );
}
// Commit on 2024-02-02T12:52:00
// Commit on 2024-03-10T15:47:00
// Commit on 2024-04-16T17:00:00
// Commit on 2024-05-23T12:54:00
// Commit on 2024-06-29T10:26:00
// Commit on 2024-08-05T10:42:00
