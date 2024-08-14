import Container from "../container/container";

const Footer = () => {
  return (
    <div className="p-9 bg-foreground-muted text-muted-foreground border-t">
      <Container>
        <ul className="flex justify-between">
          <li>&copy; Career Quest 2023</li>
          <li>
            Built by{" "}
            <a
              href="https://github.com/admclamb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthony Mclamb
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
