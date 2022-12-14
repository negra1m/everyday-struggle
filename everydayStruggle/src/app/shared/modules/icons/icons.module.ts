import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  Aperture,
  MoreHorizontal,
  AlertTriangle,
  BarChart2,
  Bell,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Droplet,
  Edit2,
  FileText,
  Home,
  Grid,
  List,
  LogOut,
  Map,
  Menu,
  Plus,
  PlusCircle,
  Power,
  Search,
  Settings,
  Trash,
  Wifi,
  WifiOff,
  Check,
  Calendar,
  Trello,
  TrendingUp,
  Thermometer,
  GitPullRequest,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDown,
  ArrowRight,
  Zap,
  RefreshCw,
  Upload,
} from 'angular-feather/icons';

const icons = {
  AlertTriangle,
  Aperture,
  BarChart2,
  Bell,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Droplet,
  Edit2,
  FileText,
  Home,
  Grid,
  List,
  LogOut,
  Map,
  Menu,
  Plus,
  PlusCircle,
  Power,
  Search,
  Settings,
  Trash,
  Wifi,
  WifiOff,
  Check,
  Calendar,
  Trello,
  TrendingUp,
  Thermometer,
  GitPullRequest,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDown,
  ArrowRight,
  Zap,
  RefreshCw,
  Upload,
  MoreHorizontal
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule { }
