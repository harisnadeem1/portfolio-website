import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import BookACallPage from './pages/BookACallPage';

function NotFoundPage() {
    return (
        <section className="container max-w-6xl py-32 text-center">
            <Helmet>
                <title>Page Not Found — Your Name</title>
                <meta name="description" content="The page you are looking for could not be found." />
            </Helmet>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">404</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
                Back to Home
            </Link>
        </section>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex min-h-[100dvh] flex-col bg-background">
                <Header />
                <main className="flex-1 pt-24 sm:pt-28">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/work" element={<WorkPage />} />
                        <Route path="/work/:slug" element={<ProjectDetailPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/book-a-call" element={<BookACallPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
