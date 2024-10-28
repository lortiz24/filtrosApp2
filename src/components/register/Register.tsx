import { IconUser } from "@tabler/icons-react";
import "./register.css";
import { TextInput } from "@mantine/core";
export const Register = () => {
  return (
    <div
      style={{
        padding: "",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundImage: 'url("assets/register/BG_Registro.png")',
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: 'url("assets/register/registerGradient.png")',
          top: -146,
          zIndex: 1,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          width: "239px" /* El ancho será el de la imagen */,
          height: "1117px" /* La altura será la de la imagen */,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "234px",
            backgroundImage: 'url("assets/register/Avatar.png")',
            zIndex: 10,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "109px",
            height: "211px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "257px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundImage: 'url("assets/register/LogoBgRegister.png")',
            width: "100%",
            height: "514px",
          }}
        />
        <div style={{ rowGap: "34px" }}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "120px",
              textAlign: "center",
            }}
          >
            Registro
          </p>
          <div
            style={{
              padding: "0px 113px",
              position: "relative",
            }}
          >
            <TextInput
              className="inputcheck"
              variant="unstyled"
              required
              fz={"h3"}
              name="names"
              leftSection={<IconUser />}
              placeholder="Ingrese su nombre"
              miw={400}
              // value={checkInForm.values.names}
             /*  onChange={({ target: { value } }) => {
                checkInForm.setFieldValue("names", value);
              }} */
              // error={checkInForm.errors.userCode}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "7 0px",
            padding: "0px 113px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              padding: "43px 113px",
              fontSize: "65px",
              borderRadius: "24px",
              backgroundColor: "#EB0AFF",
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
