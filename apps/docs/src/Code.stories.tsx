import { StoryObj } from '@storybook/react';
import {
  SyntaxHighlighter as SH,
} from '@edgmont-ui/react';

export default {
  title: 'Feedback/Code',
  component: SH,
};

let code = `use std::collections::HashMap;
use std::sync::Arc;
use winit::dpi::{LogicalSize, Size};
use winit::event_loop::ActiveEventLoop;
use winit::window::{CursorGrabMode, Fullscreen, Window as WinitWindow, WindowId};

pub struct WindowConfig {
    pub size: (u32, u32),
    pub title: String,
    pub fullscreen: bool,
    pub show_cursor: bool,
    pub relative_cursor: bool,
}

impl Default for WindowConfig {
    fn default() -> Self {
        Self{
            size: (1000, 800),
            title: String::from("My Game"),
            fullscreen: false,
            show_cursor: true,
            relative_cursor: false,
        }
    }
}

pub struct WindowManager {
    windows: HashMap<WindowId, Arc<WinitWindow>>,
    window_config: WindowConfig,
}

impl WindowManager {
    pub fn new(window_config: WindowConfig) -> Self {
        Self{
            windows: HashMap::new(),
            window_config,
        }
    }
    fn setup_window(&self, event_loop: &ActiveEventLoop) -> WinitWindow {
        let window_attr = WinitWindow::default_attributes()
            .with_inner_size::<Size>(LogicalSize::new(self.window_config.size.0, self.window_config.size.1).into());
        let window = event_loop.create_window(window_attr).unwrap();
        window.set_title(&self.window_config.title);
        window.set_cursor_visible(self.window_config.show_cursor);
        let cursor_grab_mode = if self.window_config.relative_cursor {
            CursorGrabMode::Locked
        } else {
            CursorGrabMode::None
        };
        let fullscreen = if self.window_config.fullscreen {
            Some(Fullscreen::Borderless(None))
        } else {
            None
        };
        window.set_fullscreen(fullscreen);
        window.set_cursor_grab(cursor_grab_mode).unwrap();
        window
    }
    pub fn create_window(&mut self, event_loop: &ActiveEventLoop) -> WindowId {
        let window = Arc::new(self.setup_window(event_loop));
        self.windows.entry(window.id()).or_insert(window.clone());

        window.id()
    }
    pub fn get_window(&mut self, window_id: &WindowId) -> Arc<WinitWindow> {
        self.windows.get(window_id).unwrap().clone()
    }
    pub fn get_config(&self) -> &WindowConfig {
        &self.window_config
    }
}
`;

export const SyntaxHighlighter: StoryObj<typeof SH> = {
  render: ({ ...rest }) => <>
    <SH {...rest} language="rust" code={code} />
    <br />  </>,
};
