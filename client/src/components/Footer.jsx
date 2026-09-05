export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Shri Savai Bhaoj Marble & Granite</strong>
        <p>Natural stone and industrial minerals from Rajasthan, India.</p>
      </div>
      <div className="footer-right">© {new Date().getFullYear()} Shri Savai Bhaoj</div>
    </footer>
  );
}