import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Code,
  BookOpen,
  Accessibility,
  TestTube2,
  Gauge,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function SplitList() {
  const [openItem, setOpenItem] = useState<MenuItem | null>(null);
  const handleToggle = (item: MenuItem | null) => {
    setOpenItem((prev) => (prev === item ? null : item));
  };

  const itemsBefore = openItem
    ? menuItems.slice(0, menuItems.indexOf(openItem))
    : [];
  const itemsAfter = openItem
    ? menuItems.slice(menuItems.indexOf(openItem) + 1)
    : [];

  const getBorderRadius = (index: number, totalItems: number) => {
    return {
      borderBottomLeftRadius: index === totalItems - 1 ? 20 : 0,
      borderBottomRightRadius: index === totalItems - 1 ? 20 : 0,
      borderTopLeftRadius: index === 0 ? 20 : 0,
      borderTopRightRadius: index === 0 ? 20 : 0,
    };
  };

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full relative">
        <div className="w-full">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.key}
              className="border border-t-0 first:border-t border-b-0 last:border-b w-full overflow-hidden bg-white"
              style={{
                ...getBorderRadius(index, menuItems.length),
              }}
              layoutId={`menu-item-${item.key}`}
            >
              <button
                onClick={() => handleToggle(item)}
                className="w-full p-4 flex items-center justify-between"
              >
                <motion.div
                  layoutId={`title-${item.key}`}
                  className="flex items-center space-x-2"
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </motion.div>
                <motion.div className="" layoutId={`chevron-${item.key}`}>
                  <ChevronDown />
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {openItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center bg-white justify-center"
            >
              <motion.div
                layout
                className="w-full flex items-center justify-center flex-col"
              >
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {itemsBefore.length !== 0 &&
                    itemsBefore.map((item, index) => (
                      <motion.div
                        key={item.key}
                        className="border w-full overflow-hidden bg-white"
                        style={{
                          ...getBorderRadius(index, itemsBefore.length),
                          borderTopWidth: index === 0 ? 1 : 0,
                          borderBottomWidth:
                            index === itemsBefore.length - 1 ? 1 : 0,
                          marginBottom:
                            index === itemsBefore.length - 1 ? 16 : 0,
                        }}
                        layoutId={`menu-item-${item.key}`}
                      >
                        <button
                          onClick={() => handleToggle(item)}
                          className="w-full p-4 flex items-center justify-between"
                        >
                          <motion.div
                            layoutId={`title-${item.key}`}
                            className="flex items-center space-x-2"
                          >
                            {item.icon}
                            <span className="font-medium">{item.title}</span>
                          </motion.div>
                          <motion.div
                            className=""
                            layoutId={`chevron-${item.key}`}
                          >
                            <ChevronDown />
                          </motion.div>
                        </button>
                      </motion.div>
                    ))}
                </motion.div>

                <motion.div
                  key={openItem.key}
                  className="border w-full overflow-hidden bg-gray-50"
                  style={{
                    borderRadius: 20,
                  }}
                  layoutId={`menu-item-${openItem.key}`}
                >
                  <button
                    onClick={() => handleToggle(null)}
                    className="w-full p-4 flex items-center justify-between"
                  >
                    <motion.div
                      layoutId={`title-${openItem.key}`}
                      className="flex items-center space-x-2"
                    >
                      {openItem.icon}
                      <span className="font-medium">{openItem.title}</span>
                    </motion.div>
                    <motion.div
                      className=""
                      layoutId={`chevron-${openItem.key}`}
                    >
                      <ChevronUp />
                    </motion.div>
                  </button>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="p-4 pt-0"
                  >
                    {openItem.description}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {itemsAfter.length !== 0 &&
                    itemsAfter.map((item, index) => (
                      <motion.div
                        key={item.key}
                        className="border w-full overflow-hidden bg-white"
                        style={{
                          ...getBorderRadius(index, itemsAfter.length),
                          borderTopWidth: index === 0 ? 1 : 0,
                          borderBottomWidth:
                            index === itemsAfter.length - 1 ? 1 : 0,
                          marginTop: index === 0 ? 16 : 0,
                        }}
                        layoutId={`menu-item-${item.key}`}
                      >
                        <button
                          onClick={() => handleToggle(item)}
                          className="w-full p-4 flex items-center justify-between"
                        >
                          <motion.div
                            layoutId={`title-${item.key}`}
                            className="flex items-center space-x-2"
                          >
                            {item.icon}
                            <span className="font-medium">{item.title}</span>
                          </motion.div>
                          <motion.div
                            className=""
                            layoutId={`chevron-${item.key}`}
                          >
                            <ChevronDown />
                          </motion.div>
                        </button>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

type MenuItem = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    key: "coding",
    title: "Clean Code Practices",
    description:
      "Essential principles and patterns for writing maintainable and scalable software across different programming paradigms.",
    icon: <Code size={24} />,
  },
  {
    key: "learning",
    title: "Learning Resources",
    description:
      "Curated educational materials and documentation to help developers stay current with modern development practices.",
    icon: <BookOpen size={24} />,
  },
  {
    key: "access",
    title: "Accessibility Guidelines",
    description:
      "Best practices for creating inclusive applications that work for everyone, following WCAG standards.",
    icon: <Accessibility size={24} />,
  },
  {
    key: "testing",
    title: "Testing Strategies",
    description:
      "Comprehensive approaches to software testing, including unit, integration, and end-to-end testing methodologies.",
    icon: <TestTube2 size={24} />,
  },
  {
    key: "perf",
    title: "Performance Metrics",
    description:
      "Tools and techniques for measuring and optimizing application performance, focusing on key user experience indicators.",
    icon: <Gauge size={24} />,
  },
];
