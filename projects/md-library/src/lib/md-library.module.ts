import { NgModule } from '@angular/core';
import { MdLibraryComponent } from './md-library.component';
import { DiagramComponent } from './diagram/diagram.component';
import { AdornmentComponent } from './adornment/adornment.component';
import { AnimationManagerComponent } from './animation-manager/animation-manager.component';
import { BindingComponent } from './binding/binding.component';
import { BrushComponent } from './brush/brush.component';
import { CommandHandlerComponent } from './command-handler/command-handler.component';
import { ContextMenuToolComponent } from './context-menu-tool/context-menu-tool.component';
import { GeometryComponent } from './geometry/geometry.component';
import { GraphLinksModelComponent } from './graph-links-model/graph-links-model.component';
import { GraphObjectComponent } from './graph-object/graph-object.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { GroupComponent } from './group/group.component';
import { InputEventComponent } from './input-event/input-event.component';
import { IteratorComponent } from './iterator/iterator.component';
import { LayeredDigraphLayoutComponent } from './layered-digraph-layout/layered-digraph-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { LinkingToolComponent } from './linking-tool/linking-tool.component';
import { PanelComponent } from './panel/panel.component';
import { PartComponent } from './part/part.component';
import { PathFigureComponent } from './path-figure/path-figure.component';
import { PathSegmentComponent } from './path-segment/path-segment.component';
import { RelinkingToolComponent } from './relinking-tool/relinking-tool.component';
import { SpotComponent } from './spot/spot.component';
import { ToolManagerComponent } from './tool-manager/tool-manager.component';
import { UndoManagerComponent } from './undo-manager/undo-manager.component';

@NgModule({
  imports: [
  ],
  declarations: [MdLibraryComponent, DiagramComponent, AdornmentComponent, AnimationManagerComponent, BindingComponent, BrushComponent, CommandHandlerComponent, ContextMenuToolComponent, GeometryComponent, GraphLinksModelComponent, GraphObjectComponent, GridLayoutComponent, GroupComponent, InputEventComponent, IteratorComponent, LayeredDigraphLayoutComponent, LayoutComponent, LinkingToolComponent, PanelComponent, PartComponent, PathFigureComponent, PathSegmentComponent, RelinkingToolComponent, SpotComponent, ToolManagerComponent, UndoManagerComponent],
  exports: [MdLibraryComponent, DiagramComponent, AdornmentComponent, AnimationManagerComponent, BindingComponent, BrushComponent, CommandHandlerComponent, ContextMenuToolComponent, GeometryComponent, GraphLinksModelComponent, GraphObjectComponent, GridLayoutComponent, GroupComponent, InputEventComponent, IteratorComponent, LayeredDigraphLayoutComponent, LayoutComponent, LinkingToolComponent, PanelComponent, PartComponent, PathFigureComponent, PathSegmentComponent, RelinkingToolComponent, SpotComponent, ToolManagerComponent, UndoManagerComponent]
})
export class MdLibraryModule { }
