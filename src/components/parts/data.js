export default (content = "Slide") => {
    const colors = [
      "#4a9eda",
      "#6872e0",
      "#9966e0",
      "#d665e0",
      "#e066ad",
      "#e16973",
      "#d7c938",
      "#da864a",
      "#96d73b",
      "#54da48",
      "#46da84",
      "#44d9cd"
    ];

    const images = [
        "../../assets/images/hands.jpg",
        "../../assets/images/kleurtjes.jpg",
    ]
  
    return colors.map((color, idx) => ({
      idx: idx + 1,
      content: `${content} #${idx + 1}`,
      color
    }));
  };