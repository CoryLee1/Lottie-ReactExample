import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: 500,
        margin: "auto",
        color: "#fff",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
      }}
    >
      {/*文字 */}
      <div>For more infomation</div>
      <div>Please visit：</div>
      <div>https://coryleeart.com/</div>
      {/*返回按钮 */}
      <div
        onClick={() => {
          navigate("/");
        }}
        style={{
          backgroundColor: "#D9D9D9",
          marginTop: 20,
          border: "1px solid #000",
          borderRadius: 30,
          width: 152,
          height: 40,
          textAlign: "center",
          lineHeight: "40px",
          color: "#000",
        }}
      >
        Back
      </div>
    </div>
  );
}
