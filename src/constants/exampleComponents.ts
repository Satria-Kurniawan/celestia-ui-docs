export const sourceCodeButtonOutlined = `
  <Button text="Primary Outlined" variant="OUTLINED" color="PRIMARY" />
  <Button text="Purple Outlined" variant="OUTLINED" color="PURPLE" />
  <Button text="Red Outlined" variant="OUTLINED" color="RED" />
  <Button text="Green Outlined" variant="OUTLINED" color="GREEN" />
  <Button text="Blue Outlined" variant="OUTLINED" color="BLUE" />
`;

export const sourceCodeButtonContained = `
  <Button text="Primary Contained" variant="CONTAINED" color="PRIMARY"/>
  <Button text="Purple Contained" variant="CONTAINED" color="PURPLE" />
  <Button text="Red Contained" variant="CONTAINED" color="RED" />
  <Button text="Green Contained" variant="CONTAINED" color="GREEN" />
  <Button text="Blue Contained" variant="CONTAINED" color="BLUE" />
`;

export const sourceCodeButtonOutlinedWithIcon = `
  <Button
    text="Primary Outlined"
    variant="OUTLINED"
    color="PRIMARY"
    rightIcon={<HiMiniArrowLongRight />}
  />
  <Button
    text="Purple Outlined"
    variant="OUTLINED"
    color="PURPLE"
    leftIcon={<HiMiniArrowLongLeft />}
  />
  <Button
    text="Red Outlined"
    variant="OUTLINED"
    color="RED"
    leftIcon={<HiMiniArrowLongLeft />}
    rightIcon={<HiMiniArrowLongRight />}
  />
  <Button
    text="Green Outlined"
    variant="OUTLINED"
    color="GREEN"
    leftIcon={<HiMiniArrowLongLeft />}
  />
  <Button
    text="Blue Outlined"
    variant="OUTLINED"
    color="BLUE"
    rightIcon={<HiMiniArrowLongRight />}
  />
`;

export const sourceCodeButtonContainedWithIcon = `
  <Button
    text="Primary Contained"
    variant="CONTAINED"
    color="PRIMARY"
    rightIcon={<HiMiniArrowLongRight />}
  />
  <Button
    text="Purple Contained"
    variant="CONTAINED"
    color="PURPLE"
    leftIcon={<HiMiniArrowLongLeft />}
  />
  <Button
    text="Red Contained"
    variant="CONTAINED"
    color="RED"
    leftIcon={<HiMiniArrowLongLeft />}
    rightIcon={<HiMiniArrowLongRight />}
  />
  <Button
    text="Green Contained"
    variant="CONTAINED"
    color="GREEN"
    leftIcon={<HiMiniArrowLongLeft />}
  />
  <Button
    text="Blue Contained"
    variant="CONTAINED"
    color="BLUE"
    rightIcon={<HiMiniArrowLongRight />}
  />
`;

export const sourceCodeCard = `
  <Card>
    <Card.Title title="Lorem" />
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
    reprehenderit amet perferendis rerum omnis sequi beatae quod aut
    quae nostrum.
  </Card>

  <Card>
    <Card.Title title="Lorem" />
    <Card.Description
      description="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
    reprehenderit amet perferendis rerum omnis sequi beatae quod aut
    quae nostrum."
    />
  </Card>
  
  <Card>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
    reprehenderit amet perferendis rerum omnis sequi beatae quod aut
    quae nostrum.
  </Card>
`;

export const sourceCodeTextInput = `
  <TextInput type="email" label="Email" placeholder="Email" />
  <TextInput type="password" label="Password" placeholder="Password" />
`;

export const sourceCodeNavbar = `
  <Navbar
    brand={<span className="font-bold italic">CelestiaUI</span>}
    menus={exampleNavbarMenus}
    cta={
      <>
        <Button variant="OUTLINED" text="Sign Up" />
        <Button variant="CONTAINED" text="Sign In" />
      </>
    }
  />
`;

export const sourceCodeHamburgerMenu = `
  const [active, setActive] = React.useState<boolean>(false);
  
  <HamburgerMenu variant="2" active={active} setActive={setActive} />
  <HamburgerMenu variant="3" active={active} setActive={setActive} />
  <HamburgerMenu variant="4" active={active} setActive={setActive} />
  <HamburgerMenu variant="5" active={active} setActive={setActive} />
`;

export const sourceCodeLoader = `
  <Loader variant="1" />
  <Loader variant="2" />
  <Loader variant="3" />
  <Loader variant="4" />
`;
