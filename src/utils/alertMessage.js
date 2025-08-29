export const alertMessage = (toast, message, type = "success") => {
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    style: {
      background: "white",
      color: "#374151",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      border: "none",
      padding: "16px 20px",
      minHeight: "auto",
      maxWidth: "400px",
    },
    closeButton: {
      color: "#9CA3AF",
      fontSize: "16px",
    },
    toastClassName: "custom-toast",
  };

  // Add colored left border based on type
  const borderColor = {
    success: "#10B981",
    error: "#EF4444",
    info: "#3B82F6",
    warning: "#F59E0B",
  };

  const iconColor = {
    success: "#10B981",
    error: "#EF4444",
    info: "#3B82F6",
    warning: "#F59E0B",
  };

  // Add left border and icon color
  toastOptions.style.borderLeft = `4px solid ${borderColor[type]}`;
  toastOptions.style.color = iconColor[type];

  switch (type) {
    case "success":
      return toast.success(message, toastOptions);
    case "error":
      return toast.error(message, toastOptions);
    case "info":
      return toast.info(message, toastOptions);
    case "warning":
      return toast.warning(message, toastOptions);
    default:
      return toast.success(message, toastOptions);
  }
};

export const showSuccessToast = (toast, message) => {
  return alertMessage(toast, message, "success");
};

export const showErrorToast = (toast, message) => {
  return alertMessage(toast, message, "error");
};

export const showInfoToast = (toast, message) => {
  return alertMessage(toast, message, "info");
};

export const showWarningToast = (toast, message) => {
  return alertMessage(toast, message, "warning");
};
