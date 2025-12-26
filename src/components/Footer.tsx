const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            versaas<span className="text-primary">.ai</span>
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VersaSaaS. Built for businesses that think ahead.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
