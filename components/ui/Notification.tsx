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
  const duration = notification.duration || 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(notification.id), 400);
    }, duration);

    return () => clearTimeout(timer);
  }, [notification.id, duration, onClose]);

  const variants = {
    success: {
      border: "border-l-[#10B981]",
      icon: <IconCheck className="w-5 h-5 text-[#10B981]" />,
      label: "Success",
      progress: "bg-[#10B981]",
    },
    error: {
      border: "border-l-[#EF4444]",
      icon: <IconAlertCircle className="w-5 h-5 text-[#EF4444]" />,
      label: "Error",
      progress: "bg-[#EF4444]",
    },
  };

  const v = variants[notification.type];

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={`relative w-[340px] bg-white border border-grid/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden rounded-none border-l-4 ${v.border} pointer-events-auto ${isVisible ? 'animate-notification-in' : 'animate-notification-out'}`}
        >
          <div className="p-4 flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              {v.icon}
            </div>
            
            <div className="flex-1 min-w-0 pr-2">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-ink/40 mb-1.5 antialiased">
                {v.label}
              </div>
              <p className="text-[13.5px] font-medium leading-relaxed text-ink selection:bg-primary/10 tracking-tight">
                {notification.message}
              </p>
            </div>

            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => onClose(notification.id), 400);
              }}
              className="flex-shrink-0 p-1.5 rounded-none hover:bg-black/5 transition-colors group"
            >
              <IconX className="w-4 h-4 text-ink/30 group-hover:text-ink transition-colors" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-grid/10">
            <div
              style={{ 
                animation: `notification-progress ${duration}ms linear forwards` 
              }}
              className={`h-full ${v.progress}`}
            />
          </div>
        </div>
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
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none items-end">
      <AnimatePresence mode="popLayout" initial={false}>
        {notifications.map(notification => (
          <NotificationComponent
            key={notification.id}
            notification={notification}
            onClose={removeNotification}
          />
        ))}
      </AnimatePresence>
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
