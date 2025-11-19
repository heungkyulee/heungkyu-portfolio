"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n-provider";
import { Separator } from "@/components/ui/separator";

interface ProjectDialogProps {
    isOpen: boolean;
    onClose: () => void;
    project: any; // Using any for simplicity with the dynamic data structure
}

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
    const { t } = useI18n();

    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border-zinc-800 text-zinc-50">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                            {project.category}
                        </Badge>
                    </div>
                    <DialogTitle className="text-3xl font-bold text-zinc-100">
                        {t(project.title)}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-zinc-400 mt-2">
                        {t(project.description)}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 mt-6">
                    {/* Placeholder for Image/Carousel */}
                    <div className="aspect-video w-full bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-600">Project Preview Image</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-zinc-100 mb-2">Problem</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                    {project.problem ? t(project.problem) : "Problem definition not available."}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-zinc-100 mb-2">Solution</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                    {project.solution ? t(project.solution) : "Solution details not available."}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-zinc-100 mb-2">Impact</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                    {project.impact ? t(project.impact) : "Impact metrics not available."}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech: string) => (
                                        <Badge key={tech} variant="secondary" className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
