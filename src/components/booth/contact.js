import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import { Grid, IconButton } from "@material-ui/core";

const Contact = () => {
  const { clubObj, key } = useContext(PortfolioContext);
  const { facebook, instargram, openchat } = clubObj.contact_us;
  const instargramUrl = `https://www.instagram.com/${instargram}/`;
  return (
    <section id="contact" className={key}>
      <Container>
        <Title title="Contact Us" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || "Would you like to work with me? Awesome!"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                email
                  ? `mailto:${email}`
                  : "https://github.com/cobidev/react-simplefolio"
              }
            >
              {btn || "Let's Talk"}
            </a> */}
            <Grid container spacing={3} justify="center">
              <Grid item>
                <IconButton href={facebook}>
                  <img
                    width="50px"
                    src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im01MTIgMjU2YzAgMTQxLjM4NjcxOS0xMTQuNjEzMjgxIDI1Ni0yNTYgMjU2cy0yNTYtMTE0LjYxMzI4MS0yNTYtMjU2IDExNC42MTMyODEtMjU2IDI1Ni0yNTYgMjU2IDExNC42MTMyODEgMjU2IDI1NnptMCAwIiBmaWxsPSIjNGE3YWZmIi8+PHBhdGggZD0ibTI2Ny4yMzQzNzUgNTExLjczODI4MWMxMzYuMTcxODc1LTUuODc4OTA2IDI0NC43NjU2MjUtMTE4LjEyMTA5MyAyNDQuNzY1NjI1LTI1NS43MzgyODEgMC0uOTk2MDk0LS4wMjczNDQtMS45ODgyODEtLjAzOTA2Mi0yLjk4NDM3NWwtMTc3LjY5OTIxOS0xNzcuNzAzMTI1LTE5MCAxOTguNTkzNzUgMTA1LjU2NjQwNiAxMDUuNTY2NDA2LTQ4LjY3NTc4MSA2Ni4xODM1OTR6bTAgMCIgZmlsbD0iIzAwNTNiZiIvPjxwYXRoIGQ9Im0zMzQuMjYxNzE5IDc1LjMxMjV2NTcuOTY4NzVzLTY2LjU1NDY4OC05LjY2MDE1Ni02Ni41NTQ2ODggMzMuMjc3MzQ0djQyLjkzNzVoNjAuMTEzMjgxbC03LjUxMTcxOCA2NS40ODA0NjhoLTUyLjYwMTU2M3YxNzAuNjc5Njg4aC02Ni41NTQ2ODd2LTE3MC42Nzk2ODhsLTU2Ljg5NDUzMi0xLjA3NDIxOHYtNjQuNDA2MjVoNTUuODIwMzEzdi00OS4zNzg5MDZzLTMuNjgzNTk0LTczLjQ1NzAzMiA2OC43MDMxMjUtODYuOTQ5MjE5YzMwLjA1ODU5NC01LjYwNTQ2OSA2NS40ODA0NjkgMi4xNDQ1MzEgNjUuNDgwNDY5IDIuMTQ0NTMxem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMzM0LjI2MTcxOSAxMzMuMjgxMjV2LTU3Ljk2ODc1cy0zNS40MjE4NzUtNy43NS02NS40ODA0NjktMi4xNDQ1MzFjLTQuNjk1MzEyLjg3NS05LjA2MjUgMi4wMDc4MTItMTMuMTM2NzE5IDMuMzQ3NjU2djM2OS4xNDA2MjVoMTIuMDYyNXYtMTcwLjY3OTY4OGg1Mi41OTc2NTdsNy41MTU2MjQtNjUuNDgwNDY4aC02MC4xMTMyODFzMCAwIDAtNDIuOTM3NSA2Ni41NTQ2ODgtMzMuMjc3MzQ0IDY2LjU1NDY4OC0zMy4yNzczNDR6bTAgMCIgZmlsbD0iI2RjZTFlYiIvPjwvc3ZnPg=="
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href={instargramUrl}>
                  <img
                    width="50px"
                    src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAtMjA4NTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHgyPSI1MTIiIHkxPSItMjExMTAiIHkyPSItMjExMTAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZjM4ZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTUxMiAyNTZjMCAxNDEuMzg2NzE5LTExNC42MTMyODEgMjU2LTI1NiAyNTZzLTI1Ni0xMTQuNjEzMjgxLTI1Ni0yNTYgMTE0LjYxMzI4MS0yNTYgMjU2LTI1NiAyNTYgMTE0LjYxMzI4MSAyNTYgMjU2em0wIDAiIGZpbGw9InVybCgjYSkiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzI5LjYzNjcxOSA0MzNoLTE0Ny4yNzM0MzhjLTU2Ljk5NjA5MyAwLTEwMy4zNjMyODEtNDYuMzY3MTg4LTEwMy4zNjMyODEtMTAzLjM2MzI4MXYtMTQ3LjI3MzQzOGMwLTU2Ljk5NjA5MyA0Ni4zNjcxODgtMTAzLjM2MzI4MSAxMDMuMzYzMjgxLTEwMy4zNjMyODFoMTQ3LjI3MzQzOGM1Ni45OTYwOTMgMCAxMDMuMzYzMjgxIDQ2LjM2NzE4OCAxMDMuMzYzMjgxIDEwMy4zNjMyODF2MTQ3LjI3MzQzOGMwIDU2Ljk5NjA5My00Ni4zNjcxODggMTAzLjM2MzI4MS0xMDMuMzYzMjgxIDEwMy4zNjMyODF6bS0xNDcuMjczNDM4LTMyNGMtNDAuNDUzMTI1IDAtNzMuMzYzMjgxIDMyLjkxMDE1Ni03My4zNjMyODEgNzMuMzYzMjgxdjE0Ny4yNzM0MzhjMCA0MC40NTMxMjUgMzIuOTEwMTU2IDczLjM2MzI4MSA3My4zNjMyODEgNzMuMzYzMjgxaDE0Ny4yNzM0MzhjNDAuNDUzMTI1IDAgNzMuMzYzMjgxLTMyLjkxMDE1NiA3My4zNjMyODEtNzMuMzYzMjgxdi0xNDcuMjczNDM4YzAtNDAuNDUzMTI1LTMyLjkxMDE1Ni03My4zNjMyODEtNzMuMzYzMjgxLTczLjM2MzI4MXptMCAwIi8+PHBhdGggZD0ibTI1NiAzNTJjLTUyLjkzMzU5NCAwLTk2LTQzLjA2NjQwNi05Ni05NnM0My4wNjY0MDYtOTYgOTYtOTYgOTYgNDMuMDY2NDA2IDk2IDk2LTQzLjA2NjQwNiA5Ni05NiA5NnptMC0xNjJjLTM2LjM5NDUzMSAwLTY2IDI5LjYwNTQ2OS02NiA2NnMyOS42MDU0NjkgNjYgNjYgNjYgNjYtMjkuNjA1NDY5IDY2LTY2LTI5LjYwNTQ2OS02Ni02Ni02NnptMCAwIi8+PHBhdGggZD0ibTM2NS44MzIwMzEgMTU5Ljg5ODQzOGMwIDcuNTgyMDMxLTYuMTQ4NDM3IDEzLjczMDQ2OC0xMy43MzA0NjkgMTMuNzMwNDY4LTcuNTgyMDMxIDAtMTMuNzMwNDY4LTYuMTQ4NDM3LTEzLjczMDQ2OC0xMy43MzA0NjggMC03LjU4MjAzMiA2LjE0ODQzNy0xMy43MzA0NjkgMTMuNzMwNDY4LTEzLjczMDQ2OSA3LjU4MjAzMiAwIDEzLjczMDQ2OSA2LjE0ODQzNyAxMy43MzA0NjkgMTMuNzMwNDY5em0wIDAiLz48L2c+PC9zdmc+"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href={openchat}>
                  <img
                    width="50px"
                    src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgMWMtNi42MjcgMC0xMiA0LjIwOC0xMiA5LjM5OSAwIDMuMzU2IDIuMjQ2IDYuMzAxIDUuNjI1IDcuOTYzLTEuNjc4IDUuNzQ5LTIuNjY0IDYuMTIzIDQuMjQ0IDEuMjg3LjY5Mi4wOTcgMS40MDQuMTQ4IDIuMTMxLjE0OCA2LjYyNyAwIDEyLTQuMjA4IDEyLTkuMzk5IDAtNS4xOS01LjM3My05LjM5OC0xMi05LjM5OHoiIGZpbGw9IiMzZTI3MjMiLz48ZyBmaWxsPSIjZmZlYjNiIj48cGF0aCBkPSJtMTAuMzg0IDguMjdjLS4zMTctLjg5My0xLjUyOS0uODk0LTEuODQ1LS4wMDEtLjk4NCAzLjA1Mi0yLjMwMiA0LjkzNS0xLjQ5MiA1LjMwNiAxLjA3OC40ODkgMS4xMDEtLjYxMSAxLjM1OS0xLjFoMi4xMTFjLjI1Ny40ODcuMjgyIDEuNTg4IDEuMzU5IDEuMS44MTMtLjM3MS0uNDg5LTIuMTk1LTEuNDkyLTUuMzA1em0tMS42MTQgMi45ODcuNjkyLTEuOTUxLjY5MSAxLjk1MXoiLz48cGF0aCBkPSJtNS4zNjUgMTMuNjhjLTEuMTk4IDAtLjQ5LTEuNjU3LS42OTItNC43NDItLjQyOS0uMDc0LTEuNzYuMjk3LTEuNzYtLjY3MyAwLS4zNzEuMzA1LS42NzMuNjc5LS42NzMgMi41MTguMTggNC4yMjQtLjQ3IDQuMjI0LjY3MyAwIC45ODctMS4yNzUuNTktMS43Ni42NzMtLjIgMy4wNzUuNTA1IDQuNzQyLS42OTEgNC43NDJ6Ii8+PHBhdGggZD0ibTEzLjE1NCAxMy41NzljLTEuMTU5IDAtLjQ1NC0xLjU2NS0uNjYzLTUuMzAxIDAtLjkxIDEuNDEzLS45MDkgMS40MTMgMHY0LjA0Yy42NjkuMDg5IDIuMTM1LS4zMyAyLjEzNS42My0uMDAxIDEuMDA3LTEuNTc2LjUwMy0yLjg4NS42MzF6Ii8+PHBhdGggZD0ibTE5LjU1NiAxMy4zOC0xLjYyNC0yLjEzNy0uMjQuMjM5djEuNWMwIC4zOC0uMzEuNjg4LS42OTMuNjg4LTEuMjAzIDAtLjQ4Mi0xLjczMi0uNjkyLTUuMzkyIDAtLjM3OS4zMS0uNjg4LjY5Mi0uNjg4IDEuMDQ1IDAgLjU5NCAxLjQ3OC42OTIgMi4xNjYgMS45Ni0xLjg3MyAxLjkxMy0yLjA3MiAyLjMxNi0yLjA3Mi41NTYgMCAuODk3LjY5MS41MjcgMS4wNThsLTEuNTc4IDEuNTY3IDEuNzA0IDIuMjQzYy41NTYuNzI1LS41NTUgMS41NTYtMS4xMDQuODI4eiIvPjwvZz48L3N2Zz4="
                  />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
