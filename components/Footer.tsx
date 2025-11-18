export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-stone-300">
            © {new Date().getFullYear()} BUILD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
