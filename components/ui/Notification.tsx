"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "@/components/ui/motion-lite";
import { IconX, IconCheck, IconAlertCircle } from "@tabler/icons-react";

type NotificationType = "success" | "error";

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

interface NotificationProps {
  notification: Notification;
  onClose: (id: string) => void;
}

function NotificationComponent({ notification, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(notification.id), 300);
    }, notification.duration || 5000);

    return () => clearTimeout(timer);
  }, [notification.id, notification.duration, onClose]);

  const icons = {
    success: <IconCheck className="w-5 h-5" />,
    error: <IconAlertCircle className="w-5 h-5" />,
  };

  const colors = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed bottom-4 right-4 z-[9999] flex items-start gap-3 p-4 rounded-lg border shadow-lg max-w-sm ${colors[notification.type]}`}
        >
          <div className="flex-shrink-0 mt-0.5">
            {icons[notification.type]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-5">
              {notification.message}
            </p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose(notification.id), 300);
            }}
            className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 transition-colors"
          >
            <IconX className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NotificationContainer() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (type: NotificationType, message: string, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    const notification: Notification = { id, type, message, duration };
    
    setNotifications(prev => [...prev, notification]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Listen for notification events
  useEffect(() => {
    const handleNotification = (event: CustomEvent) => {
      const { type, message, duration } = event.detail;
      addNotification(type, message, duration);
    };

    window.addEventListener('showNotification', handleNotification as EventListener);
    return () => {
      window.removeEventListener('showNotification', handleNotification as EventListener);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-[9999] p-4 space-y-2 pointer-events-none">
      {notifications.map(notification => (
        <NotificationComponent
          key={notification.id}
          notification={notification}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
}

// Hook for showing notifications
export function useNotification() {
  return (type: NotificationType, message: string, duration?: number) => {
    const showNotification = (window as any).showNotification;
    if (showNotification) {
      showNotification(type, message, duration);
    }
  };
}
