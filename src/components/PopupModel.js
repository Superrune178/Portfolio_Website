import React from 'react'
import PdfLoader from './pdfLoader';
import { AnimatePresence, motion } from 'framer-motion';

function PopupModel({ isOpen, setIsOpen }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="text-white p-6 rounded-lg w-full max-w-[80%] h-4/5 shadow-xl cursor-default relative overflow-y-scroll"
                    >
                        <div className="relative z-10">
                            <PdfLoader />
                            <div className="flex">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.body.style.overflow = 'auto';
                                    }}
                                    className="bg-accent text-white hover:opacity-90 transition-opacity font-semibold w-full py-2 rounded"
                                >
                                    Exit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PopupModel