function FooterSection() {
  let date = new Date();
  return (
    <div className="h-20 bg-black text-primary-foreground flex items-center justify-center">
      Tanmay Agrawal | Fullstack Engineer | portfolio &#169;{" "}
      {date.getFullYear()}
    </div>
  );
}

export default FooterSection;
