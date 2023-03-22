import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

interface IOwnProps {
  openForm: () => void;
}

export default function NavBar({openForm}: IOwnProps) {
  return (
    <>
      <Menu
        inverted
        fixed="top"
      >
        <Container>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo"  style={{ marginRight: '10px'}} />
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activities" />
            <Menu.Item>
                <Button 
                    positive
                    content="Create Activity"
                    onClick={openForm}
                />
            </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}