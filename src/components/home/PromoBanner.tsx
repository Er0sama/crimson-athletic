import { Tag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 overflow-hidden py-6 md:py-8 mt-16 md:mt-20">
            {/* Animated background effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left side - Offer text */}
                    <div className="flex items-center gap-3 text-white">
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                            <span className="font-display font-bold text-xl md:text-2xl">
                                WINTER SALE 2026
                            </span>
                            <span className="text-white/90 text-base md:text-lg">
                                Up to 50% OFF on Premium Athletic Gear
                            </span>
                        </div>
                    </div>

                    {/* Right side - CTA */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Tag className="h-4 w-4 text-white" />
                            <span className="text-white font-semibold text-sm">
                                Limited Time Only
                            </span>
                        </div>
                        <Link to="/services">
                            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold">
                                Shop Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;
